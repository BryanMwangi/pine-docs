---
slug: you-dont-need-a-framework
title: You Do not Need a Framework
authors: bryanmwangi
tags: [pine, helloWorld, new]
---

This probably sounds insane having spent time building Pine, however, I have to say that you may not need a framework to build a server in Go. In this blog I will outline why I built Pine and what I have learnt from it.

<!-- truncate -->

## Why Pine?

About 2 months ago, I and a group of other people were tasked with a small project to build a food ordering system. The challenge was to not use any framework on the backend and utilize the standard library as much as possible.

This got me thinking. Is it possible to achieve the same level of performance and efficiency as working with frameworks such as Fiber, Echo or Gin? What is it that makes them boast insane numbers when it comes to performance?

## Enter Pine

Well Pine was born with those exact questions in mind. Build a [net/http](https://pkg.go.dev/net/http) server in Go and not use any framework but have the same level of performance and efficiency.

I have used Fiber in the past and I loved it especially when I was transitioning from node to Go. On node, I would use the [express](https://expressjs.com/) npm package to build servers on node JS and I was a bit lazy and wanted anything that would offer the same experience as I was learning Go.

Fiber is a breeze to use and before you say anything, yes, Pine has some similarities with Fiber. This is particularly noticeable in some of the configurations used by the main Server instance as one reddit comment pointed out.

The similarities end at the configurations of the main Server struct and maybe the Helmet package.

## Clarification

When I made this [post](https://www.reddit.com/r/golang/comments/1g2h7yp/pine_a_simple_express_js_or_fiber_golang/) a couple of weeks ago, 2 people wanted to claim that Pine was a balant copy of Fiber with the underlying workings of [fasthttp](https://github.com/valyala/fasthttp) changed to [net/http](https://pkg.go.dev/net/http).

Here is the thing. Naming is hard in programming and the same can be seen here. Just because you have similar naming schemes does not mean whatever is performing the logic is the same.

I would like to encourage you to carefully read the underlying code to understand how it works before making certain accusations.

## Let us continue

With that out of the way, let us look into the challenges of making your own framework.

### Routing

After trying to understand how open source routers work as well as other frameworks' routing system, I was able to come up with my own solution to solve routing.

The challenge of performance boils down to how fast you can route a request to its respective handlers, process the request and send back a response to the client. Whenever you as a developer are using Pine to create a router, you would use some of the inbuilt methods related to the server instance you create after calling the `New` function. One example is the `Get` method:

```go
func (server *Server) Get(path string, handlers ...Handler)
```

You can then use this method to create a route such as `GET /hello` and pass the handlers that you want to execute when the request is made.

```go
app.Get("/hello", func(c *pine.Ctx) error {
  return c.SendString("Hello World")
})
```

After creating the route, internally Pine, creates a stack of routes that it uses to efficiently match a request to its respective handlers.

```go
stack [][]*Route
```

We index the routes on server startup and whenever a request is made, we extract things like parameters when generating a Ctx related to the request. More on the [Ctx here](/docs/Guide%20-%20Basics/ctx).

Now, you do not even need to implement routing yourself as you can use other packages including ones built into the standard library for this. Examples include:

- [httprouter](https://github.com/julienschmidt/httprouter)
- [chi](https://github.com/go-chi/chi)
- [gorilla/mux](https://github.com/gorilla/mux)
- [net/http.ServeMux](https://pkg.go.dev/net/http@master#ServeMux)

## Other Challenges

With an efficient routing system in place, most of the remaining challenges are purely for the sake of a better developer experience.

Most frameworks use the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle to reduce the amount of code you need to write. Using this philosophy, you tend to write code that allows you to focus on the core functionality of your server without having to repeat yourself.

For example, instead of re-writing code to handle writing a json response over and over again, you can build your own solution that accepts data as an interface and encodes to json and writes the response to the response body.

These abstractions are what make frameworks so powerful and allow you to focus on the core functionality of your server. Not that they are miles ahead or have some secret sauce that makes them stand out, and you can build these solutions yourself.

## Nice to have

Pine offers some neat features out of the box that you can easily implement yourself or use Pine's implementation of them.

One such feature is the [cron](/docs/Guide%20-%20Basics/cron) package. During my exercise with my colleagues, we had to have a feature that would update a database at a specific interval. I then thought to myself that we could have cron jobs that can do such tasks during the server's runtime.

Another neat feature is the [WatchFile](/docs/Guide%20-%20Basics/websockets#watchfile) function implemented within the [websockets](/docs/Guide%20-%20Basics/websockets) package. This feature came to me after utilizing [fly.io](https://fly.io) services for some time now.

If you have used them before, you have the ability to monitor live logs. The only challenge is you have a small window in which you can see the logs in unless you dive deeper in the `search logs` feature. I then thought to myself, what if I wanted to see all my logs in my log file and in real time?

With `WatchFile`, you can do exactly that. You first need to open a websocket connection to allow streaming of the logs in real time and more on this in the [websockets guide](/docs/Guide%20-%20Basics/websockets).

## Mistakes

I am aware that there may be some mistakes in the implementation of Pine and that is why I encourage anyone to not just point out the mistakes but also to suggest improvements to the code. That is the only way we can all collectively improve ourselves.

This project started off as a learning exercise and as you can see from my benchmarks, Pine is able to compete with Fiber in synthetic tests.

## Benchmarks

One comment from the post is that there was no way to perform a benchmark with Pine or at least I did not highlight how I was able test this. I used a tool called [Oha](https://github.com/hatoo/oha) to test the performance of the server.

Setting up a benchmark is simple. First open any directory you wish to use and set up a new Go project. Next import the Pine package using the following command:

```bash
go get github.com/BryanMwangi/pine
```

In your main.go start a simple server and pass the port you wish to listen to.

```go
package main

import (
    "log"

    "github.com/BryanMwangi/pine"
)

func main() {
    // Initialize a new Pine app
    app := pine.New()

    // Define a route for the GET method on the path '/hello'
    app.Get("/hello", func(c *pine.Ctx) error {
        return c.SendString("Hello World!")
    })

    // Start the server on port 3000
    log.Fatal(app.Start(":3000"))
}
```

You can change the routes to your choosing or try out different tests such as JSON encoding, middlewares etc.

Anyway, once your server is up and running after executing `go run main.go` you can run the benchmark using the following command:

```bash
oha -n 1000000 -c 100 http://localhost:3000/hello
```

The `-c` flag is the number of concurrent connections and the `-n` flag is the number of requests per connection. In my tests, when I was testing Fiber, Express and Pine, I used 1,000,000 requests and 100 concurrent connections. You can change these values to your liking.

You can observe the results and make your own conclusions. Also use this opportunity to test your own solutions and see how they perform.

## Conclusion

In my honest opinion, the real rockstars here are authors of the standard [net/http](https://pkg.go.dev/net/http) package and the [fasthttp](https://github.com/valyala/fasthttp) package since that is where most of the performance is gained from.

With the latest release of net/http, it was previously 10 times slower than fasthttp, however, they manage to match or sometimes beat the performance of fasthttp.

I am not saying that using frameworks is bad or one framework is better than another, heck, I am not even suggesting that you should use Pine, instead, I am challenging you to be a better developer and try building some of the solutions yourself.

I created Pine because I want to learn and teach others about the findings I have learnt and if you have any suggestions or improvements, please do not hesitate to open an issue or a pull request. I want to be a better developer myself and that means learning from my mistakes as well as others. I am in no means perfect, and do not take Pine as my gospel to the world, instead try to learn from it and improve yourself and others.

Please be aware that Pine is still very much in beta with improvements coming soon given that as a framework, I have some catching up to do. At this point other frameworks are a couple of years ahead having started some 5 or 6 years ago, but that does not mean I will abandon Pine. I am still learning every day as I implement some of the solutions myself, and I would be happy if anyone would like to contribute to the project.

If you wish to use Pine, please remember the limitations of the project and the fact that it is still in beta. If you like the project, please consider starring it on [GitHub](https://github.com/BryanMwangi/pine) and sharing it with your friends and colleagues.
