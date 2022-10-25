const h1 = document.querySelector('.advice');
const adviceID = document.querySelector('.advice-id');
const diceButton = document.querySelector('.btn');

const generateAdvice = async () => 
{
    try
    {
        const res = await fetch('https://api.adviceslip.com/advice', { cache: "no-cache" });
        const data = await res.json();
        const adviceId = data.slip.id;
        const advice = data.slip.advice;
        console.log(adviceId, advice);
        h1.innerHTML = advice;
        adviceID.innerHTML = adviceId;
    }
    catch(err)
    {
        h1.innerHTML = err;
    }
}

generateAdvice();

diceButton.addEventListener('click', generateAdvice);