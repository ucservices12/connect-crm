import { CheckIcon, GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { useState } from "react";
import { version } from "@/../package.json"


export function AuthWithSocials() {
    return (
        <div className="w-full max-w-sm mx-auto ">
            <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                            fill="currentColor"
                        />
                    </svg>
                    Login with Apple
                </Button>
                <Button variant="outline" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                            fill="currentColor"
                        />
                    </svg>
                    Login with Google
                </Button>
            </div>
            <div className="after:border-border mt-3 relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or continue with
                </span>
            </div>
        </div>
    )
}

export function LoginForm() {
    return (
        <form className="w-full max-w-sm mx-auto">
            <div className="grid gap-6">
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-3">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <a
                                href="#"
                                className="ml-auto text-sm underline-offset-4 hover:underline"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </div>
                <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="underline underline-offset-4">
                        Sign up
                    </a>
                </div>
            </div>
        </form>
    )
}

export function RegisterForm() {
    return (
        <form className="w-full max-w-sm mx-auto ">
            <div className="grid gap-4">
                <div className="grid gap-3">
                    <Label htmlFor="email">Name</Label>
                    <Input id="name" type="text" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="confPassword">Confirm Password</Label>
                    <Input id="confPassword" type="password" required />
                </div>
                <div className="flex items-center gap-3">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <Button type="submit" className="w-full">
                    Create Account
                </Button>
            </div>
        </form>
    )
}

export function CreateOrganizationForm() {
    return (
        <div className="sm:mt-36 w-full max-w-sm mx-auto ">
            <div>
                <h2 className="taxt-lg sm:text-3xl font-semibold tracking-tight">
                    Name your Workspace
                </h2>
                <div className="mt-6 grid gap-2">
                    <Input
                        id="organizationName"
                        type="text"
                        placeholder="Workspace Name"
                    />
                    <small className="text-xs leading-none font-medium">- Try the name of your company or organization.</small>
                    {/* {error && <p className="text-xs text-danger-600 mt-1">{error}</p>} */}
                </div>
                <Button className="w-full mt-4" type="submit">
                    Continue
                </Button>
            </div>

            {/* 
      <div className="text-center grid gap-2">
        <h3 className="text-3xl text-black font-bold">Welcome Back!</h3>
        <p className="text-blue-500 font-mono text-xl">testforai500@gmail.com</p>
        <div className="font-semibold">It seems you already tried signUp please click Continue to proceed with above email</div>
        <button onClick={() => navigate('verify-otp')} className="bg-primary-800 btn text-white">
          Continue
        </button>
      </div> 
      */}
        </div>
    )
}

const plans = [
    {
        title: 'Monthly Plan',
        currency: 'SGD',
        monthlyRate: 3,
        yearlyRate: 29,
        isYearly: false,
        country: 'SGD'
    },
    {
        title: 'Yearly Plan',
        currency: 'INR',
        monthlyRate: 199,
        yearlyRate: 1799,
        isYearly: true,
        country: 'INR'
    },
    {
        title: 'Monthly Plan',
        currency: 'INR',
        monthlyRate: 199,
        yearlyRate: 1799,
        isYearly: false,
        country: 'INR'
    },
    {
        title: 'Yearly Plan',
        currency: 'SGD',
        monthlyRate: 3,
        yearlyRate: 29,
        isYearly: true,
        country: 'SGD'
    }
];

export function PricingPlanes() {
    const [users, setUsers] = useState(1);

    const getTotal = (plan) => {
        if (users <= 5) return 0;
        return plan.isYearly ? (plan.yearlyRate * (users - 5)) : (plan.monthlyRate * (users - 5));
    };

    return (
        <div className="sm:px-6">
            <div className="grid gap-4 text-center w-full">
                <h2 className="text-indigo-600 font-bold text-base">Pricing</h2>
                <h1 className="text-2xl sm:text-5xl font-extrabold text-balance">
                    Plans for teams of all sizes
                </h1>
                <p className="text-muted-foreground text-md sm:text-lg">
                    Choose your best plan
                </p>
                <div className="mb-4 grid gap-2 w-full">
                    <Label htmlFor="users">Number of Users:</Label>
                    <Input
                        id="users"
                        type="text"
                        min="1"
                        max="50"
                        value={users}
                        onChange={(e) => setUsers(Number(e.target.value))}
                        className="w-64"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {plans.map((plan, idx) => (
                    <Card key={idx} className='p-6 rounded-3xl'>
                        <h3 className="scroll-m-20 sm:text-xl text-lg font-semibold tracking-tight">
                            {plan.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">Pricing plan for {plan.currency} currency.</p>
                        <ul className="ml-4 grid gap-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <CheckIcon className="mt-1 h-4 w-4 text-green-600" />
                                <span>0 {plan.currency} Free (Up to 5 Team Members)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckIcon className="mt-1 h-4 w-4 text-green-600" />
                                <span>
                                    {plan.isYearly
                                        ? `${plan.yearlyRate} ${plan.currency}`
                                        : `${plan.monthlyRate} ${plan.currency}`} (Per Team Member)
                                </span>
                            </li>
                        </ul>
                        <h3 className="sm:text-xl text-md font-semibold text-indigo-800 tracking-tight">
                            Total: <span className="font-extrabold">{getTotal(plan).toFixed(2)} {plan.currency}</span>
                        </h3>
                        <Button variant='outline' className="w-full text-indigo-800 hover:underline underline-offset-4 underline-indigo-800 hover:text-indigo-800 font-semibold py-3">
                            Switch to this Plan
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export function ForgotPassword() {
    return (
        <form className={cn("flex flex-col gap-6 w-full max-w-sm mx-auto ")}>
            <div className="flex flex-col  gap-2">
                <h1 className="text-2xl font-bold">Forgot Password</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to reset your password
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <Button type="submit" className="w-full">
                    Send verification Code
                </Button>
            </div>
            <div className="text-center text-sm">
                If you already have an account?
                <Link to="#" className="text-link font-semibold">
                    Sign In
                </Link>
            </div>
        </form>
    )
}

export function ResetPassword() {
    const [code, setCode] = useState(Array(6).fill(''));

    return (
        <div className="w-full max-w-sm mx-auto ">
            <h2 className="sm:text-3xl text-2xl font-semibold tracking-tight mb-1">
                Enter New Password
            </h2>
            <p className="text-muted-foreground text-sm mb-4">Confirm code and enter new password.</p>
            <form className="space-y-4">
                {/* Disabled Email */}
                <div className="grid gap-2">
                    <Label >Email</Label>
                    <Input
                        type="email"
                        value="testforai500@gmail.com"
                        disabled
                    />
                </div>

                {/* Code Inputs */}
                <div className=" flex justify-between gap-2">
                    {code.map((digit, idx) => (
                        <Input
                            key={idx}
                            id={`code-${idx}`}
                            type="text"
                            value={digit}
                        />
                    ))}
                </div>

                {/* Password Input */}
                <div className="grid gap-2 relative">
                    <Label>Password</Label>
                    <Input
                        className="pr-10"
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        className="absolute right-3 top-9"
                    >
                        {/* {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
                    </Button>
                </div>

                {/* Confirm Password Input */}
                <div className="grid gap-2 relative">
                    <Label>Confirm Password</Label>
                    <Input
                        // type={showConfirmPassword ? 'text' : 'password'}
                        className="pr-10"
                    />
                    <Button
                        type="button"
                        variant="ghost"
                    >
                        {/* {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
                    </Button>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2">
                    <Button type="submit">
                        Continue
                    </Button>
                    <Button variant="outline" type="button" >
                        Resend
                    </Button>
                </div>

                {/* Cancel */}
                <Link to="/signin" className="w-full mt-2">
                    <Button className="w-full" variant="secondary">
                        Cancel & Go To Sign In
                    </Button>
                </Link>
            </form>
        </div>
    )
}

export function VerifyOtp() {
    const [code, setCode] = useState(Array(6).fill(''));

    return (
        <div className="w-full max-w-sm mx-auto flex flex-col items-center space-y-6">
            <div className="text-4xl text-blue-500">
                📩
            </div>
            <h2 className="sm:text-3xl text-2xl font-semibold tracking-tight mb-1">
                Verify your Email
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
                We have sent a verification code to your email<br />
                Enter this code to verify your account
            </p>

            <div className="flex space-x-2">
                {code.map((char, idx) => (
                    <Input
                        key={idx}
                        type="text"
                        maxLength={1}
                        value={char}
                        className="sm:w-10 w-9 sm:h-10 h-9 text-center border rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ))}
            </div>

            <Button
                disabled={code.includes("")}
                className={`w-full py-2 rounded-md text-white font-semibold ${code.includes("") ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                    }`}
            >
                Verify
            </Button>

            <div className="grid grid-cols-2 gap-4 w-full">
                <Button>
                    Resend
                </Button>

                <Link to='/login' >
                    <Button variant='secondary' className="w-full">
                        Cancel
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default function Layout() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2 bg-black">
            <Card className="sm:min-h-svh sm:m-6 m-3 shadow-none">
                <div className="px-4 border-b pb-2 text-base flex justify-between">
                    <Link to="#" className="flex items-center gap-2 font-medium text-sm">
                        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                            <GalleryVerticalEnd className="size-3 sm:size-4" />
                        </div>
                        UC Services
                    </Link>
                    <p className="font-medium">Welcome</p>
                </div>
                <div className="py-6 sm:py-20 px-6">
                    {/* <AuthWithSocials /> */}
                    {/* <LoginForm /> */}
                    {/* <RegisterForm /> */}
                    {/* <ForgotPassword /> */}
                    {/* <ResetPassword /> */}
                    {/* <VerifyOtp /> */}
                    {/* <CreateOrganizationForm /> */}
                    <PricingPlanes />
                </div>
            </Card>
            <div className="w-full max-w-xl sm:text-center mx-auto py-6 sm:py-14 px-6">
                <div className="grid gap-3">
                    <h2 className="sm:text-4xl text-3xl font-bold tracking-tight text-white">
                        With UC Services from chaos to peace of mind !
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Effortlessly managing her business with confidence.
                    </p>
                    <p className="text-muted-foreground text-sm">
                        Boost your productivity and get the peace of mind you deserve. Try UCServices today and take control of your business with ease!
                    </p>
                </div>
                {/* <img
                    src="/placeholder.svg"
                    alt="Image"
                    className="absolute inset-0 object-cover dark:brightness-[0.2] dark:grayscale"
                /> */}
                <p className="text-white my-3 text-start text-sm">Copyright © 2025 Umbakrar Tech Pvt Ltd.. All rights reserved. Version : {version}</p>
            </div>
        </div>
    );
}
