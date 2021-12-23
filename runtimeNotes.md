| SIZED ARRAY                                                                                          | doublerInsert results                  | doublerAppend results                       |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- |
| tinyArray                                                                                            | 74.853 μs                              | 122.505 μs                                  |
| -----------------                                                                                    | -------------------------------------- | ------------------------------------------- |
| smallArray                                                                                           | 100.394 μs                             | 118.931 μs                                  |
| -----------------                                                                                    | -------------------------------------- | ------------------------------------------- |
| mediumArray                                                                                          | 193.781 μs                             | 160.38 μs                                   |
| -----------------                                                                                    | -------------------------------------- | ------------------------------------------- |
| largeArray                                                                                           | 6.759984 ms                            | 619.007 μs                                  |
| -----------------                                                                                    | -------------------------------------- | ------------------------------------------- |
| extraLargeArray                                                                                      | 961.851239 ms                          | 5.092796 μs                                 |
| ---------------------------------------------------------------------------------------------------- |

How does each function “scale”? Which of the two functions scales better? How can you tell?

The two functions, doublerInsert and doublerAppend both take in an array of numbers, multiply each by 2, and then add each new value to a new array. Although they function the same, doublerAppend scales much more effectively because it uses a O(n) time complexity compared to doublerInsert's O(n^2) time complexity. The use of the method .unshift() in doublerInsert functions as a second 'n' operation as it has to shift each value in the array after the first 'n' operation; the loop. The results in the table above show that as the doublerAppend is scaled (from tinyArray to extraLargeArray) the result remains in μs with a linear progression. The doublerInsert results display a quadratic progression of time increasing from μs to ms as the function is scaled.
