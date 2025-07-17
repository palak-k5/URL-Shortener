import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { useNavigate } from "@tanstack/react-router"
import { registerUser } from "../api/user.api"
// import { login } from "../store/slice/authSlice"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card"

const RegisterForm = ({ state }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    setLoading(true)
    setError("")

    try {
      const data = await registerUser(name,password,email)
      // dispatch(login(data.user))
      // navigate({ to: "/dashboard" })
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err.message || "Registration failed. Please try again.")
    }
  }

  return (
    <Card className="w-[450px] h-[400px]">
      <form onSubmit={handleSubmit}>
        <CardHeader className="space-y-1 text-center">
  <CardTitle className="text-2xl font-bold">Create An Account</CardTitle>
  {<CardDescription>...</CardDescription>}
</CardHeader>


        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
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
        </CardContent>
{error}
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </Button>

          <p className="text-sm text-center text-muted-foreground cursor-pointer">
            Already have an account?{" "}
            <span
              className="text-primary hover:underline cursor-pointer"
              onClick={() => state(true)}
            >
              Sign In
            </span>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}

export default RegisterForm
