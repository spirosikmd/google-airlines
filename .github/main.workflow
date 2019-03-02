workflow "Deploy" {
  on = "push"
  resolves = ["Test"]
}

action "Install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "Test" {
  uses = "borales/actions-yarn@master"
  needs = ["Install"]
  args = "test --ci --coverage"
}
