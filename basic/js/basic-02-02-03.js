<script src="big.js"></script> // first
<script src="small.js"></script> // second

<script async src="big.js"></script> // second
<script async src="small.js"></script> // first

<script defer src="big.js"></script> // first
<script defer src="small.js"></script> // second