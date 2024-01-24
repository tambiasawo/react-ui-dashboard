import React from "react";
import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

//another way to handle signing in
/* const loginHandler2 = async (e: any) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        email: user.email,
        password: user.password,
        callbackUrl: (router.query.callbackUrl as string) ?? "/",
        redirect: false,
      });
      if (result?.ok) {
        router.push(callbackUrl);
      } else {
        setError(result?.error || "");
      }
    } catch (error) {
      console.log("Invalid login");
    }
  }; */

const Login = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({ email: "", password: "" });
  const callbackUrl = (router.query.callbackUrl as string) ?? "/";
  const loginError = router.query.error ? "Invalid Credentials" : "";

  const loginHandler = (e: any) => {
    e.preventDefault();
    signIn("credentials", {
      email: user.email,
      password: user.password,
      callbackUrl,
    });
  };

  return (
    <Box width={{ xs: "100%", md: "40%" }} margin="60px auto">
      <Paper
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: 0 }}>Login</h2>
        <form onSubmit={loginHandler}>
          <Stack spacing={2} py={0}>
            <TextField
              placeholder="Email Address"
              name="email"
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            <TextField
              name="password"
              placeholder="Password"
              required
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
              type="password"
            />
            {loginError && (
              <p style={{ background: "#ff474c", textAlign: "center" }}>
                Invalid Credentials
              </p>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: 2,
                }}
                type="submit"
              >
                Sign In
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 2,
                }}
                onClick={() =>
                  signIn("google", {
                    callbackUrl: (router.query.callbackUrl as string) ?? "/",
                  })
                }
              >
                Sign in With Google
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 2,
                }}
                onClick={() =>
                  signIn("github", {
                    callbackUrl: (router.query.callbackUrl as string) ?? "/",
                  })
                }
              >
                Sign in With GitHub
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
