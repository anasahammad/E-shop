import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";


const Register = () => {
    const currentUser = getCurrentUser()
    
    return (
        <Container>
            <FormWrap>
                <RegisterForm currentUser={currentUser}/>
            </FormWrap>
        </Container>
    );
};

export default Register;