// import axios from "axios";
import { useState, useEffect } from "react";
import {Typography} from "@material-ui/core"
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

import NewsCards from "./components/Newscards/NewsCards";
import useStyles from "./styles"

import aiLogo from "./assets/alan-logo-icon-color.png"

const alanKey = "f5502b7531fdf14f75ee321bb04c47dc2e956eca572e1d8b807a3e2338fdd0dc/stage"

function App() {
  const classes = useStyles()
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewArticles] = useState([]);
 
  useEffect(()=> {
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles, number}) => {
        if(command === "newsTopics") {
          setNewArticles(articles)
          setActiveArticle(-1)
        }else if (command === "highlight"){
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if(command === "open") {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }): number;
          const article = articles[parsedNumber -1]
          
          if (parsedNumber > 20) {
            alanBtn().playText("Please Try that again")
          } else if(article){
              window.open(article.url, "_blank")
              alanBtn().playText(`opening article ${number}`)
          }
          
        }
      }
    })
  }, [])

  return (
    <div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <div className={classes.logoContainer}>
        <Typography variant="h3" component="h3" color="textSecondary">Powered by <i><img style={{width: "50px"}} src={aiLogo} alt="ai-logo"/></i></Typography>
      </div>
    </div>
  );
}

export default App;
