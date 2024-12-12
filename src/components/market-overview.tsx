import { ArrowDownIcon, ArrowUpIcon, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const marketData = [
  {
    title: "S&P 500",
    value: "4,927.93",
    change: "+0.53%",
    isPositive: true
  },
  {
    title: "NASDAQ",
    value: "15,628.95",
    change: "+0.89%",
    isPositive: true
  },
  {
    title: "Bitcoin",
    value: "$52,374.21",
    change: "-2.14%",
    isPositive: false
  },
  {
    title: "Gold",
    value: "$2,024.30",
    change: "+0.12%",
    isPositive: true
  }
]

export function MarketOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {marketData.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className={`flex items-center text-xs ${
              item.isPositive ? "text-green-500" : "text-red-500"
            }`}>
              {item.isPositive ? (
                <ArrowUpIcon className="mr-1 h-4 w-4" />
              ) : (
                <ArrowDownIcon className="mr-1 h-4 w-4" />
              )}
              {item.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}