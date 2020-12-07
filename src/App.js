import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";

import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import Homepage from "./Home/Homepage/Homepage";
import AboutPage from "./About/About";

const externalContent = {
    id: "article-1",
    title: "An Article",
    author: "April Bingham",
    text: "Some text in the article",
};

function App() {
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            // performs a GET request
            const response = await fetch("https://5fc3f9f8e5c28f0016f54fc2.mockapi.io/api/v1/posts");
            const responseJson = await response.json();

            console.log('post resp - json:', responseJson)

            setFetchedData(Object.values(responseJson));
        };

        if (isEmpty(fetchedData)) {
            fetchData();
        }
    }, [fetchedData]);

    // console.log("fetched data:", fetchedData);

    return isEmpty(fetchedData) ? null : (
        <div className="App">
            <>
                <header>
                    {/*{Homepage}*/}

                    {/*<Homepage articles={fetchedData} />*/}

                    {/*<nav>*/}
                    {/*  <ul>*/}
                    {/*    /!* these links should show you how to connect up a link to a specific route *!/*/}
                    {/*    <li>*/}
                    {/*      <Link to="/">Home</Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*      <Link to="/foo">Foo</Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*      <Link to="/bar/hats/sombrero">Bar</Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*      <Link to="/baz">Baz</Link>*/}
                    {/*    </li>*/}
                    {/*  </ul>*/}
                    {/*</nav>*/}
                </header>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact>
                        <Homepage posts={fetchedData} />
                    </Route>
                    <Route path="/foo" exact component={Foo} />
                    <Route path="/about" exact component={AboutPage} />

                    {/*<Route*/}
                    {/*    path="/posts/:id"*/}
                    {/*    exact*/}

                    {/*    render={({ match }) => (*/}
                    {/*        <DetailPost*/}
                    {/*            id={match.param.id}*/}
                    {/*            post={mockPosts}*/}
                    {/*        />*/}
                    {/*    )}*/}
                    {/*/>*/}

                    {/* passing parameters via a route path */}
                    <Route
                        path="/bar/:categoryId/:productId"
                        exact
                        render={({ match }) => (
                            // getting the parameters from the url and passing
                            // down to the component as props
                            <Bar
                                categoryId={match.params.categoryId}
                                productId={match.params.productId}
                            />
                        )}
                    />

                    <Route
                        path="/baz"
                        exact
                        render={() => <Baz content={externalContent} />}
                    />
                    <Route component={Error} />
                </Switch>
            </>
        </div>
    );
}

export default App;
