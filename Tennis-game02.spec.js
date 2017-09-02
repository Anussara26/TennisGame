function TennisGame(){
  this.reset = () => {

  }
  this.echo = () => {
  return 'Fifteen - Love'
}
}

test('Echo"Fifteen - Love" when PlayerA get first score',()=>{
  // Arrange
let add = new TennisGame()

  // Act
add.reset()
let result = add.echo()
  // Assert
  expect(result).toBe('Fifteen - Love')
})
