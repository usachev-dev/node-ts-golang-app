package main

import (
	"./api_errors"
	"./hello"
	"fmt"
	"github.com/gin-gonic/gin"
	"io/ioutil"
)

var helloStore = hello.NewMemoryStore()

func main() {
	r := gin.New()
	r.GET("/hello", getHello)
	r.POST("/hello", setHello)
	//gin.SetMode(gin.ReleaseMode)
	fmt.Println("Go api listening at port 8080")
	r.Run(":8080")
}

func getHello(context *gin.Context) {
	fmt.Printf("%s", "GET")
	result, err := helloStore.GetHello()
	if err != api_errors.NoError {
		context.String(err.StatusCode, err.Message)
	}
	context.String(200, result)
}

func setHello(context *gin.Context) {
	helloByte, readErr := ioutil.ReadAll(context.Request.Body)
	if readErr != nil {
		context.String(400, "Could not read request data")
	}
	value := string(helloByte)
	err := helloStore.SetHello(value)
	if err != api_errors.NoError {
		context.String(err.StatusCode, err.Message)
		return
	}
	context.Status(200)
}
