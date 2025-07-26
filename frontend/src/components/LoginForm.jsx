// components/login-form.tsx

import { useState } from "react"
import { useNavigate } from "@tanstack/react-router"
import { loginUser } from "../api/user.api"
import { login } from "../store/slice/authSlice"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { useDispatch, useSelector } from "react-redux"


const LoginForm = ({ state}) => {
    
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const handleSubmit = async () => {
    setLoading(true)
    setError("")

    try {
      const data = await loginUser(password, email)
      dispatch(login(data.user))
      navigate({ to: "/dashboard" })
      setLoading(false)
      console.log("Sign in success")
    } catch (error) {
    // Extract custom message from backend
    setLoading(false);
    const message =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "Login failed";

    // Optional: log it
    console.error("Login error:", message);
      
    //Throw the custom message so it can be shown to the user
    setError(message);
  }
  }

  return (
    <div >
      <Card className="w-[450px] h-[400px]  max-w-md  border-border rounded-lg border shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Sign In To Your Account

</CardTitle>
          <CardDescription className="text-2xl"></CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="yourname@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
                    {error && (
            <div className="text-sm text-destructive bg-destructive/10 px-4 py-2 rounded-md">
              {error}
            </div>
          )}


        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <p className="text-center text-sm text-muted-foreground cursor-pointer">
            Don&apos;t have an account?{" "}
            <span
              className="text-primary hover:underline cursor-pointer"
              onClick={() => state(false)}
            >
              Register
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginForm
