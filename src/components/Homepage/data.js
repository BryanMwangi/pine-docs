export const MainFeatureList = [
  {
    title: "Easy to Use",
    imageUrl: require("@site/static/img/easy-to-use.png").default,
    description: (
      <>
        Pine prides itself on simplicity. The core principles of Pine are
        simplicity and performance.
      </>
    ),
  },
  {
    title: "Check under the hood",
    imageUrl: require("@site/static/img/under-the-hood.png").default,
    description: (
      <>
        With Pine you are able to inspect and provide improvements to what runs
        Pine. Check out the <code>advcanced documentation</code> directory to
        see how Pine works.
      </>
    ),
  },
  {
    title: "Powered by Go",
    imageUrl: require("@site/static/img/golang-logo.png").default,
    description: (
      <>
        Easily one of the most readable and performant languages available and
        Pine takes full advantage of Go's speed and simplicity.
      </>
    ),
  },
];

export const exampleOne = `package main

import (
	"log"

	"github.com/BryanMwangi/pine"
)

func main() {
	app := pine.New()
	app.Get("/hello", func(c *pine.Ctx) error {
		return c.SendString("Hello World!")
	})

	log.Fatal(app.Start(":3000", "", ""))
}

`;

export const simpleExample = `package main

import (
	"log"
    "net/http"

	"github.com/BryanMwangi/pine"
)

// example for a struct
type MyParams struct {
	Name string
	Age  int
}

func main() {
	app := pine.New()

  // bind params
  app.Get("/hello/:name", func(c *pine.Ctx) error {
      params := new(MyParams)
      err := c.BindParam("name", &params.Name)
      if err != nil {
        return c.SendStatus(http.StatusBadRequest)
      }
      return c.SendString("Hello " + params.Name)
  })

	log.Fatal(app.Start(":3000", "", ""))
}
`;

export const advancedExample = `
var (
	ErrParse      = errors.New("bind: cannot parse")
	ErrConvert    = errors.New("bind: cannot convert")
	ErrType       = errors.New("bind: unexpected type")
	ErrPtr        = errors.New("bind: destination must be a pointer")
	ErrValidation = errors.New("bind: validation failed")
)

func (c *Ctx) BindParam(key string, v interface{}) error {
	param := c.Params(key)
	if param == "" {
		return ErrValidation
	}
	return bind(param, v)
}

// Internal helper function to validate the bind
// requires the input in this case is the key of the param or query
// and the destination is the value of the param or query
func bind(input string, destination interface{}) error {
	// reflect the type and value of the destination
	typ := reflect.TypeOf(destination)
	val := reflect.ValueOf(destination)

	// Check if the destination is a pointer
	if typ.Kind() != reflect.Ptr {
		return ErrPtr
	}

	// Dereference pointer type to assign value
	val = reflect.Indirect(val)

	switch val.Kind() {
	case reflect.String:
		val.SetString(input)
	case reflect.Int, reflect.Int64:
		parsed, err := strconv.ParseInt(input, 10, 64)
		if err != nil {
			return ErrConvert
		}
		val.SetInt(parsed)
	case reflect.Float64, reflect.Float32:
		parsed, err := strconv.ParseFloat(input, 64)
		if err != nil {
			return ErrConvert
		}
		val.SetFloat(parsed)
	case reflect.Bool:
		parsed, err := strconv.ParseBool(input)
		if err != nil {
			return ErrConvert
		}
		val.SetBool(parsed)
	default:
		return ErrType
	}
	return nil
}
`;

export const averageLatency = [1.328, 1.302, 1.328];
export const requestsPerSecond = [77229, 73959, 1966];
export const slowest = [19.07125, 50.50235, 50.08];
