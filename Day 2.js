1.If/else 
function getGrade(score) {
    let grade;
    // Write your code here
    if(score>25 && score<=30)
    {
        grade='A';
    }
    else if(score>20 && score<=25)
    {
        grade='B';
    }
    else if(score>15 && score<=20)
    {
        grade='C';
    }
    else if(score>10 && score<=15)
    {
        grade='D';
    }
    else if(score>5 && score<=10)
    {
        grade='E';
    }
    else
    {
        grade='F'
    }
    return grade;
}
------------------------------------------------------------------------------------------------------------------
2. SWITCH 

function getLetter(s) 
{
    let letter;
    // Write your code here
    switch (s.charAt(0))
        {
            case ( 'a' || 'e' || 'o' || 'i' || u):
                letter = 'A';
                break;
                
            case ('b' || 'c' || 'd' || 'f' || 'g'):
                letter = 'B';
                break;
                
            case ('h' || 'j' || 'k' || 'l' || 'm'):
                letter = 'C';
                break;
                
    case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' ):
                letter = 'D';
                
        }
    return letter;   
}
----------------------------------------------------------------------------------------------------
3. Loops
function vowelsAndConsonants(s) 
{

const vowels = 'aeiou';
var consonants = '';

for (var i = 0; i < s.length; i++) {
if (vowels.includes(s[i])) 
{
   console.log(s[i]);
}
else 
{
  consonants += s[i] + '\n';

}
}

console.log(consonants.trim());

}
