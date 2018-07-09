import { Reimbursement } from "./Reimbursement";

export class User {
    ers_users_id: number;
    ers_username: string;
    ers_password: string;
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_role_id: number;

    //array for reimb
    myReimb: Reimbursement[];
}