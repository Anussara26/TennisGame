function TennisGame(){
  this.reset = () => {

  }
  this.echo = () => {
  return 'Love - Fifteen'
}
}

test('Echo"Love - Fifteen" when PlayerB get first score',()=>{
  // Arrange
let add = new TennisGame()

  // Act
add.reset()
let result = add.echo()
  // Assert
  expect(result).toBe('Fifteen - Love')
})
