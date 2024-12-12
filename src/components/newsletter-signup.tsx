import { Mail } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"

export function NewsletterSignup() {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Subscribe to Our Newsletter
        </CardTitle>
        <CardDescription className="text-primary-foreground/90">
          Get the latest financial insights and market analysis delivered to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex gap-2">
          <Input
            placeholder="Enter your email"
            type="email"
            className="bg-primary-foreground text-primary"
          />
          <Button variant="secondary">
            Subscribe
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}