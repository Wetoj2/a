const body = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {padding: 0;margin: 0;box-sizing: border-box;}
        html {font-family: Arial, Helvetica, sans-serif;font-size: 10px;}
        body {overflow: hidden;width: 100%;height: 100vh;color: white;background-size: 200px;position: relative;background-image: url("https://i.imgur.com/IauAPCV.jpeg");}
        body>section {padding: 2rem;width: 100%;height: 100vh;overflow-y: scroll;background-color: rgba(0, 0, 0, 0.573);}
        body>section>div {padding: 3rem ;background-color: rgba(0, 0, 0, 0.5);border: 3px solid rgba(0, 0, 0, 0.6);text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.21);display: flex;flex-direction: column;justify-content: flex-start;max-width: fit-content;margin-left: auto;margin-right: auto;}
        body>section>div>h1 {font-size: 3rem;margin-bottom: 2rem;word-wrap: break-word; white-space: normal; }
        body>section>div>h2 {font-size: 1.8rem;margin-bottom: 0.8rem; word-wrap: break-word;white-space: normal;}
        body>section>div>h3 {font-size: 1.4rem;word-wrap: break-word; white-space: normal; }
        body>section>div>hr {margin: 2rem 0;}
        @media (max-width: 768px) {body>section>div>h1 {font-size:16px;}body>section>div>h2 {font-size:14px;}body>section>div>h3 {font-size:12px;}}             
    </style>
</head>

<body>
    <section>
        <div>
            <h1>Суро пизже всех, потому что: </h1>
            <hr>
            <h2>1. Он умнее всех. </h2>
            <h3>У него всегда есть остроумный ответ на любой вопрос, и никто не может его переиграть в словесной дуэли.</h3>
            <hr>
            <h2>2. Его чувство юмора непревзойденное.</h2>
            <h3>Его шутки становятся легендами, и даже те, кто не понимает, смеются. </h3>
            <hr>
            <h2>3. Он самый харизматичный. </h2>
            <h3>Люди тянутся к нему, потому что он излучаешь уверенность и крутость.</h3>
            <hr>
            <h2>4. Он всегда в центре внимания.</h2>
            <h3>Без него чат становится скучным, потому что только он модет оживить разговор. </h3>
            <hr>
            <h2>5. У него всегда есть решение.</h2>
            <h3>Суро может справиться с любой ситуацией и помочь всем в чате (если захочет). </h3>
            <hr>
            <h2>6. Он обладает бесконечным обаянием. </h2>
            <h3>Никто не может устоять перед его шармом и харизмой. </h3>
            <hr>
            <h2>7. Его оригинальность вне конкуренции. </h2>
            <h3>Никто и никогда не сравнится с его уникальностью и стилем общения. </h3>
            <hr>
            <h2>8. Его сила в том, что он Суро. </h2>
            <h3>И это уже делает его лучше всех — потому что второго такого просто нет.</h3>
            <hr>
            <h1> Так что сосите ему хуй и поклонятся ему  </h1>
        </div>
    </section>
</body>
</html>
`
document.body.innerHTML = body
document.title = "Суор пизже всех"
