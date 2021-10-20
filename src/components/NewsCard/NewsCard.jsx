import React, {useState, useEffect, createRef} from 'react'
import {Card, CardContent, CardMedia, CardActions, CardActionArea, Button, Typography,} from "@material-ui/core"

import useStyles from "./styles"
import classNames from "classnames"

const NewsCard = ({article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle}) => {
    const classes = useStyles();
    const [elRefs, setElRefs] =  useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop -50);

    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    },[])

    useEffect(() => {
        if(i === activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle])
        }
    },[i, activeArticle, elRefs])

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url}>
                <CardMedia className={classes.media} image={urlToImage || "https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg"} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} variant="h5" color="textSecondary">{title}</Typography>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="secondary">Show More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
