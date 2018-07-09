package com.revature.ers.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.text.NumberFormat;

import com.revature.ers.pojos.Reimbursement;
import com.revature.ers.util.ConnectionFactory;

public class ReimbursementDaoImpl implements ReimbursementDAO {

	@Override
	public Reimbursement getReimbAmountById(int id) {
		Reimbursement amount = new Reimbursement();

		try (Connection conn = ConnectionFactory.getInstance().getConnection();) {
			String sql = "SELECT * FROM ers_reimbursement WHERE reimb_author = ?";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, id); // (first parameter, value we want)
			ResultSet rs = pstmt.executeQuery();

			// .next to iterate through our result set
			while (rs.next()) {
				amount.setReimb_id(rs.getInt(1));
				amount.setReimb_amount(rs.getDouble(2));
				amount.setReimb_author(rs.getInt(7));

			}

		} catch (SQLException sqle) {

		}
		NumberFormat formatter = new DecimalFormat("#0.00");
		System.out.println("Reimbursement amount: " + formatter.format(amount.getReimb_amount()));
		return amount;
	}

	@Override
	public Reimbursement getReimbStatusById(int id) {
		Reimbursement rei = new Reimbursement();

		try (Connection conn = ConnectionFactory.getInstance().getConnection();) {
			String sql = "SELECT reimb_status FROM ers_reimbursement_status WHERE reimb_status_id = ?";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, id);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				rei.setReimb_status_id(rs.getInt(1));
				rei.setReimb_status(rs.getString(2));
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}

		return rei;
	}

	@Override
	public Reimbursement getReimbTypeById(int id) {
		Reimbursement rei = new Reimbursement();

		try (Connection conn = ConnectionFactory.getInstance().getConnection();) {
			String sql = "SELECT reimb_type FROM ers_reimbursement_type WHERE reimb_type_id = ?";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, id);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				rei.setReimb_type_id(rs.getInt(1));
				rei.setReimb_type(rs.getString(2));
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}

		return rei;
	}

}
