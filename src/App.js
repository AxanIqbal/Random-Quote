import './App.css';
import {Button, Card, CardActions, CardContent, Container, IconButton, Typography} from "@material-ui/core";
import {GitHub, Twitter} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    textArea: {
        width: "450px"
    },
    authorText: {
        "text-align": "right",
    },
    btn: {
        "text-transform": "none",
        "margin-left": "auto"
    }
}));

const quoteData = [
    {
        text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        text: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        text: "A room without books is like a body without a soul.",
        author: " Marcus Tullius Cicero",
    },
]

function App() {

    const classes = useStyles();
    const [quote, setQuote] = useState(quoteData[Math.round(Math.random() * 4)]);

    function newQuote() {
        setQuote(prevState => {
            console.log(prevState);
            let currState = quoteData[Math.round(Math.random() * 4)];
            console.log(currState)
            while (prevState.text === currState.text) {
                currState = quoteData[Math.round(Math.random() * 4)];
                console.log(prevState.text !== currState.text)
                if (prevState.text !== currState.text) {
                    return currState;
                }
            }
            console.log("Loop End")
            return currState;
        });
    }

    return (
        <Container className={classes.root}>
            <Card id={"quote-box"} className={classes.root}>
                <CardContent className={classes.textArea}>
                    <Typography id={"quote-text"} variant={"h5"}>
                <span id={"text"}>
                    {quote.text}
                </span>
                    </Typography>
                    <Typography className={classes.authorText} color={"textSecondary"}>
                        -
                        <span id={"author"}>
                    {quote.author}
                </span>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton id={"tweet-quote"}
                                href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=\"" + quote.text + "\"" + quote.author}
                                color={"primary"}
                                component={"a"}>
                        <Twitter/>
                    </IconButton>
                    <Button id={"new-quote"} color={"primary"} variant={"contained"} className={classes.btn}
                            onClick={newQuote}>New quote</Button>
                </CardActions>
            </Card>
            <Typography align={"center"} color={"textSecondary"} variant={"body2"}>By Ahsan Iqbal<br/><IconButton
                href={"https://github.com/AxanIqbal/Random-Quote"}>
                <GitHub/>
            </IconButton>
            </Typography>

        </Container>
    );
}

export default App;
