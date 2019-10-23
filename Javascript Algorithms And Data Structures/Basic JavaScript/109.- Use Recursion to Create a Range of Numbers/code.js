function rangeOfNumbers(startNum, endNum) 
{
  if(endNum == startNum)
  {
    return [endNum];
  }
  else if(endNum > startNum)
  {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
