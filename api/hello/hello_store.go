package hello

import "../api_errors"

type Store interface {
	GetHello() (string, api_errors.ApiError)
	SetHello(hello string) api_errors.ApiError
}

type MemoryStore struct {
	hello string
}

func NewMemoryStore() MemoryStore {
	return MemoryStore{"hello"}
}

func (store *MemoryStore) GetHello() (string, api_errors.ApiError) {
	return store.hello, api_errors.NoError
}

func (store *MemoryStore) SetHello(hello string) api_errors.ApiError {
	store.hello = hello
	return api_errors.NoError
}
