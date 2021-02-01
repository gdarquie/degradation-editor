import React from 'react';
const data = require('../data/fr.json');

const Wrapper = () => {
    function parseHomePage() {

    }
    console.log(data.backgrounds);

    function renderBackgrounds(backgrounds:any[]):any[] {
        let response:any[] = [<h4>Liste des backgrounds</h4>];
        backgrounds.forEach(background => {
            response.push(
                <div>
                    <h3>{background.type}</h3>
                    <div dangerouslySetInnerHTML={{ __html: background.html_content }} />
                </div>
            );
        })

        return response;
    }

    function parseContent(data:any) {
        console.log(data.pages);
        console.log(data.backgrounds);
        // data.map((concept:any) => {
        //     // console.log(concept);
        // })
    }




    return (
        <div>
            <h1>Liste des textes</h1>
            <div>
                {renderBackgrounds(data.backgrounds)}
            </div>

        </div>
    );
};

export default Wrapper;