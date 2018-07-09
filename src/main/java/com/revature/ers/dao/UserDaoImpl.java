package com.revature.ers.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.revature.ers.pojos.Reimbursement;
import com.revature.ers.pojos.User;
import com.revature.ers.util.ConnectionFactory;

import oracle.jdbc.OracleTypes;

public class UserDaoImpl implements UserDAO {

	public User getUserById(int id) {
		User usr = new User();

		try (Connection conn = ConnectionFactory.getInstance().getConnection();) {
			String sql = "SELECT * FROM ers_users WHERE ers_users_id = ?";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, id);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				usr.setErs_users_id(id);
				usr.setErs_username(rs.getString(2));
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}

		return usr;
	}

	public ArrayList<User> getUserByName(String name) {
		ArrayList<User> users = new ArrayList<User>();

		try (Connection conn = ConnectionFactory.getInstance().getConnection();) {
			String sql = "SELECT * FROM ers_users WHERE user_first_name = ?";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, name);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				User temp = new User();
				temp.setErs_users_id(rs.getInt(1));
				temp.setUser_first_name("user_first_name");
				users.add(temp);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}

		return users;
	}

	@Override
	public User getUserRoleById(int id) {
		User usr = new User();

		try (Connection conn = ConnectionFactory.getInstance().getConnection();) {
			String sql = "SELECT user_role FROM ers_user_roles WHERE user_role_id = ?";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, id);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				usr.setUser_role_id(rs.getInt(1));
				usr.setUser_role(rs.getString(2));
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}

		return usr;
	}

	public User addUser(User newUser) {
		User usr = new User();

		try (Connection conn = ConnectionFactory.getInstance().getConnection();) {
			conn.setAutoCommit(false);
			String sql = "INSERT INTO user (ers_username, ers_password) VALUES (?,?)";

			String[] keys = new String[1];
			keys[0] = "user_id";

			PreparedStatement pstmt = conn.prepareStatement(sql, keys);
			pstmt.setString(1, newUser.getErs_username());
			pstmt.setString(2, newUser.getErs_password());

			int rowsUpdated = pstmt.executeUpdate();

			ResultSet rs = pstmt.getGeneratedKeys();

			if (rowsUpdated != 0) {
				while (rs.next()) {
					usr.setErs_users_id(rs.getInt(1));
				}
				usr.setErs_username(newUser.getErs_username());
				usr.setErs_username(newUser.getErs_password());
				System.out.println("Account created!");
				conn.commit();
			}
		} catch (SQLException sqle) {
			System.out.println("Username already exists!");
		}
		return usr;
	}

	public ArrayList<Reimbursement> getUserReimbursements(User selectedUser) {
		ArrayList<Reimbursement> rei = new ArrayList<Reimbursement>();

		try (Connection conn = ConnectionFactory.getInstance().getConnection();) {
			String sql = "{CALL get_user_reimbursements (?,?)}";
			CallableStatement cstmt = conn.prepareCall(sql);

			cstmt.setInt(1, selectedUser.getErs_users_id());

			cstmt.registerOutParameter(2, OracleTypes.CURSOR);

			cstmt.execute();

			ResultSet rs = (ResultSet) cstmt.getObject(2); // cast resultset into an object

			while (rs.next()) {
				Reimbursement temp = new Reimbursement();
				temp.setReimb_id(rs.getInt("reimb_id"));
				temp.setReimb_amount(rs.getDouble("reimb_amount"));
				temp.setReimb_author(rs.getInt("reimb_author"));
				temp.setReimb_status_id(rs.getInt("reimb_status_id"));
				temp.setReimb_type_id(rs.getInt("reimb_type_id"));
				rei.add(temp);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}
		return rei;
	}

}
