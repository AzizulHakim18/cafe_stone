import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ToastBar, toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from "../Context/UserContext";


export default function SignIn() {

    const [userEmail] = useState('')
    // const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { signin, resetPassword, signInWithGoogle } = useContext(AuthContext)




    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const email = data.get("email")
        const password = data.get("password")

        signin(email, password)
            .then(result => {
                toast.success("Log in successfully")
                navigate(from, { replace: true });
            })
            .catch(error => toast.error("Failed to log in"));

    };

    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        signInWithGoogle().then(result => {
            console.log(result.user.uid)
            navigate(from, { replace: true })
            toast.success("Sign In successfully With Google")
        })

            .catch((error) => {
                console.log(error);
                toast.error(error)
            })
    }

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <h3>OR</h3>
                <Box>
                    <Button
                        onClick={handleGoogleSignIn}
                        type="submit"
                        fullWidth

                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In With Google
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}