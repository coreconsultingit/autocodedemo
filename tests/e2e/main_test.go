package e2e

import (
	"testing"

	"github.com/company/app/api"
	"github.com/company/app/models"
)

func TestEndToEnd(t *testing.T) {
	api.DoSomething()
	assert.Equal(t, models.ExpectedOutput, api.GetOutput())
}