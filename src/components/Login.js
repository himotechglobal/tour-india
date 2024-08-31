import {
    Box,
    Button,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { useFormik } from "formik";
  import * as Yup from "yup";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
  import Visibility from "@mui/icons-material/Visibility";
  import axios from "axios";
  import { API_URl } from "../config/config";
  
  
  const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .trim("Email should not contain spaces")
          .email("Invalid email address")
          .required("Email is required."),
        password: Yup.string()
          .trim("Password should not contain spaces")
          // .matches(
          //   "^[a-zA-Z0-9_]{6,16}$",
          //   "Password should contain letters, number or underscores"
          // )
          .min(6, "Password must be at least 6 characters")
          .required("Password is required."),
      }),
      onSubmit: async (
        values,
        { setErrors, setSubmitting, resetForm, errors }
      ) => {
        if (errors) {
          setErrors(errors);
        }
        LoginFunc();
      },
    });
    const LoginFunc = async () => {
      setLoading(true);
      setErr("");
  
      try {
        const data = {
          email: formik.values.email,
          password: formik.values.password,
        };
        const res = await axios.post(`${API_URl}/auth/login`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            window.location.href = "/";
        } else {
          setLoading(false);
        }
      } catch (err) {
        if (err.response?.status === 400) {
          setErr(err.response.data.msg);
        }
        setLoading(false);
      }
    };
    return (
      <Box
        sx={{
          height: { md: "100vh" },
        }}
        lineHeight={0}
        // display={"flex"}
        // overflow={"auto"}
      >
        
        <Box
          sx={{
            height: "100%",
            // width: { lg: "55%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& .MuiFormControl-root": {
              marginBottom: "0.5rem !important",
              borderRadius: "50px !important",
              //   boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.15)",
              border: "1px solid #04091e !important",
              width: "100%",
              background: "transparent",
              color: "#fff",
              "& input[type=number]": {
                "-moz-appearance": "textfield",
              },
              "& input[type=number]::-webkit-outer-spin-button": {
                "-webkit-appearance": "none",
                margin: 0,
              },
              "& input[type=number]::-webkit-inner-spin-button": {
                "-webkit-appearance": "none",
                margin: 0,
              },
              "&:focus-Visible": {
                outline: "none !important",
                border: "none !important",
              },
              "&:hover": {
                border: "1px solid #04091e",
              },
              "& .MuiInputBase-root": {
                "&::before": {
                  display: "none",
                },
                "&::after": {
                  display: "none",
                },
              },
  
              "&:focus": {
                boxShadow: "none !important",
                border: "1px solid #fff !important",
                borderRadius: "10px !important ",
              },
              "& input": {
                padding: "12px 20px",
                width: "100%",
                color: "#000",
                fontSize: "15px",
                fontWeight: "600",
                // fontFamily: "Raleway !important",
                "&:focus": {
                  outline: "none",
                },
                "&::placeholder": {
                  color: "#0000008f !important",
                //   fontFamily: "Raleway !important",
                },
              },
            },
            "& .error": {
              marginBottom: "0.9rem !important",
              fontSize: "13px !important",
              color: "red !important",
            //   fontFamily: "Raleway !important",
              textAlign: "start",
            },
            "& .btn": {
              background: "#04091e !important",
              color: "#fff !important",
              textTransform: "capitalize !important",
              padding: "0.6rem 2rem !important",
              fontSize: "14px !important",
              borderRadius: "30px !important",
              lineHeight: "initial !important",
              fontWeight: "600 !important",
              // width: "100%",
              "&:hover": {
                background: "#000",
              },
              "&.Mui-disabled": {
                cursor: "not-allowed !important",
                pointerEvents: "auto !important",
                color: "rgb(255 255 255 / 38%) !important",
                "&:hover": {
                  opacity: "1",
                },
              },
            },
          }}
        >
          <Box
            sx={{
              p: "2rem",
              width: { lg: "35%", md: "75%", sm: "65%", xs: "100%" },
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Box pb={"3rem"}>
              {/* <Link to={"/"}>
                {" "}
                <Typography component={"img"} src={logo} />
              </Link> */}
              <Typography
                sx={{
                  fontSize: "15px",
                  textAlign: "center",
                  py: "0.5rem",
                  color: "rgba(12, 12, 12, 0.8)",
                  // fontFamily: "Raleway",
                }}
              >
                Welcomes you!
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  textAlign: "center",
                  color: "#000",
                 fontWeight:"600"
                }}
              >
               Tour India
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
                // fontFamily: "JosefinSans",
                py: "1rem",
                color:"#04091e"
              }}
            >
              Login
            </Typography>
  
            <form onSubmit={formik.handleSubmit}>
              <TextField
                autoComplete="off"
                fullWidth
                variant="standard"
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <Typography variant="body1" className="error">
                  {formik.errors.email}
                </Typography>
              )}
              <TextField
                autoComplete="off"
                fullWidth
                variant="standard"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.password && formik.errors.password && (
                <Typography variant="body1" className="error">
                  {formik.errors.password}
                </Typography>
              )}
              {err && (
                <Typography variant="body1" className="error">
                  {err}
                </Typography>
              )}
              <Box my={"1rem"}>
                <Button type="submit" className="btn">
                  {loading ? "Submitting.." : "Login"}
                </Button>
              </Box>
              <Box my={"1rem"}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    textAlign: "center",
                    py: "0.5rem",
                    color: "rgba(12, 12, 12, 0.8)",
                    // fontFamily: "Raleway",
                  }}
                >
                  By clicking the “Sign up” button, you agree to our company’s{" "}
                  <b>Terms of Use</b> and <b>Privacy Policy</b>.
                </Typography>
              </Box>
              <Box my={"1rem"}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    textAlign: "center",
                    py: "0.5rem",
                    color: "rgba(12, 12, 12, 0.8)",
                    // fontFamily: "Raleway",
                  }}
                >
                  New User ?{" "}
                  <Link
                    to={"/signup"}
                    style={{
                      color: "#04091e",
                      fontWeight: "600",
                      fontSize: "15px",
                      textDecoration:"underline"
                    }}
                  >
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Login;