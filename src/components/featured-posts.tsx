import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const featuredPosts = [
  {
    title: "Investment Strategies for 2024",
    description: "Learn about the most effective investment approaches in today's market.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
    category: "Investing"
  },
  {
    title: "Understanding Cryptocurrency Markets",
    description: "A comprehensive guide to navigating the crypto landscape.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800&auto=format&fit=crop",
    category: "Cryptocurrency"
  },
  {
    title: "Retirement Planning Essentials",
    description: "Key strategies for securing your financial future.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    category: "Planning"
  }
]

export function FeaturedPosts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredPosts.map((post, index) => (
        <Card key={index} className="overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{post.category}</span>
            </div>
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            <CardDescription className="line-clamp-2">{post.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <a href="#" className="text-sm text-primary hover:underline">
              Read more →
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}