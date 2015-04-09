\ return nth fibonacci-number
: nth-fib ( n1 -- n2 )
    1 0 rot 0 ?do tuck + loop nip ;

\ print nth fib
: fib ( n -- )
    nth-fib ." fib: " . cr ;

\ print the first n fibs
: n-fib ( n -- )
    0 do i fib loop ;

\ 10 n-fib
