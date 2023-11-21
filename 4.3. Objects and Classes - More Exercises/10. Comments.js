function storeComments(input) {
    class Comment {
        constructor(user, title, content) {
            this.user = user;
            this.title = title;
            this.content = content;
        }
    }
    let userRegex = new RegExp(/user [\w+ ]+/gm);
    let articleRegex = new RegExp(/article [\w+ ]+/gm);
    let commentRegex = new RegExp(/[\w+ ]+ posts on [\w+ ]+: [\w+ ,]+/gm);

    let users = new Set();
    let articles = new Map();
    let user;
    let article;

    input.forEach(element => {
        if (element.match(userRegex)) {
            user = element.split('user ').join('');
            users.add(user);
        } else if (element.match(articleRegex)) {
            article = element.split('article ').join('');
            if (!articles.has(article)) {
                articles.set(article, []);
            }
        } else if (element.match(commentRegex)) {
            let [u, other] = element.split(' posts on ');
            let [art, oth] = other.split(': ');
            let [title, comment] = oth.split(', ');
            if (users.add(u)) {
                if (articles.has(art)) {
                    if (title && comment) {
                        let com = new Comment(u, title, comment);
                        let values = articles.get(art);
                        values.push(com);
                        articles.set(art, values);
                    }
                }
            }
        }


    });

    let sortedArticles = Array.from(articles.entries()).sort((a, b) => b[1].length - a[1].length);

    sortedArticles.forEach(([article, comments]) => {
        console.log(`Comments on ${article}`);
        comments.sort((a, b) => a.user.localeCompare(b.user)).forEach(comment => {
            console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`);
        });
    });
}

storeComments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']
);

storeComments(['user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like']
);
