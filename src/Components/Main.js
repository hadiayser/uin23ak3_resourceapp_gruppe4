import H1 from "./H1"
import Nav from "./Nav"
import resources from "../ressurser"

export default function Main({category}){
    const ressurserFiltrert = resources.filter(res => res.category === category);
    const enCategory = [...new Set(ressurserFiltrert.map(res => res.category))];

    return(
        <main id="mainContent">
        <header>
        <H1/>
        </header>
        <Nav/>
        {enCategory.map(category =>(
            <div key={category}>
        <article>
            <h2 id="h2Storrelse">{category}</h2>
            {ressurserFiltrert.map(res => (
                <ul key={res.url}>
                    <li>
                    <a href={res.url}>{res.title}</a>
                    </li>
                </ul>
            ))}
        </article>
        </div>
        ))}
        </main>   
         );
        }
        
    