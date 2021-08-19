import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { firebaseApp } from "../../firebase";
export default function LoginPage({changeAuthFlag}) {
  const auth = firebaseApp.auth();
  const db = firebaseApp.firestore();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({
    emailErr: null,
    passwordErr: null,
  });
  const [ErrorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [formValidation, setFormValidation] = useState(false);

  const toggle = () => {
    setShowPassword(!showPassword);
  };
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gm;
  const check = (e) => {
    switch (e.target.name) {
      case "email":
        setLoginInfo({
          ...loginInfo,
          email: e.target.value,
        });
        setLoginErrors({
          ...loginErrors,
          emailErr: regex.test(loginInfo.email)
            ? null
            : e.target.value.length === 0
            ? "this field is required"
            : "Please enter a valid Email",
        });
        break;

      case "password":
        setLoginInfo({
          ...loginInfo,
          password: e.target.value,
        });
        setLoginErrors({
          ...loginErrors,
          passwordErr:
            e.target.value.length < 6
              ? "Password should be more than 6 chars"
              : null,
        });
        break;
      default:
        break;
    }
  };
  const updateUserData = (id, user)=>{
    db.collection('UsersDataCol').doc(id).update(user).then(res=>{
      // console.log('done')
      changeAuthFlag(true)
    },err=>{
      console.log(err)
    })
  }
  const submitForm = () => {
    setErrorMessage(null);
    auth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password).then(
      (result) => {

        localStorage.setItem("email", result.user.email);
        localStorage.setItem("token", result.user.refreshToken);
        db.collection('UsersDataCol').get().then((res)=>{
          res.docs.forEach(doc=>{
            let user = doc.data();
            if(user.Email == result.user.email){
                user.Token = result.user.refreshToken;
                localStorage.setItem('role',user.role)
                updateUserData(doc.ref.id,user);
            }
          })
        })
      },
      (err) => {
        setErrorMessage(err.message);
      }
    );
  };
  return (
    <>
      <Container className="mt-5 pt-5 mb-5">
        <Row className="d-flex justify-content-center mt-5 ">
          <Col></Col>
          <Col>
            {/* <Form
              className="form-signin border border-1 px-3 py-3 bg-light rounded my-4"
              onSubmit={() => {
                return false;
              }}
            > */}
            <div className="form-signin border border-1 px-3 py-3 bg-light rounded my-4">
              <Form.Group className="my-3" controlId="formBasicEmail">
                <h5 className="text-danger">{ErrorMessage}</h5>
                <Form.Label className="d-flex align-items-left">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={loginInfo.email}
                  className={loginErrors.emailErr ? "bg-danger text-white" : ""}
                  onChange={check}
                  autoComplete="off"
                  required
                />
                <h6 className="text-danger text-center">
                  {loginErrors.emailErr}
                </h6>
                <Form.Text className="text-muted d-flex align-items-left">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="d-flex align-items-left">
                  Password
                </Form.Label>
                <Form.Control
                  type={showPassword ? "password" : "text"}
                  placeholder="Password"
                  name="password"
                  value={loginInfo.password}
                  className={
                    loginErrors.passwordErr ? "bg-danger text-white" : ""
                  }
                  onChange={check}
                  autoComplete="off"
                  required
                />
                <div className="d-flex">
                  <a
                    className="my-2 btn btn-link text-primary"
                    onClick={toggle}
                  >
                    {showPassword ? "Show password" : "Hide password"}
                  </a>
                </div>
                <h6 className="text-danger text-center">
                  {loginErrors.passwordErr}
                </h6>
              </Form.Group>

              <Button
                variant="primary"
                className="container my-3"
                type="submit"
                disabled={formValidation ? true : false}
                onClick={submitForm}
              >
                Login
              </Button>
              {/* </Form> */}
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
