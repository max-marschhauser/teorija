CSS

na slike mogu staviti filter i neki efekt, a onda kod hovera mogu napraviti da se taj efekt promijeni (npr. slika je po defaultu filter:greyscale(100%) contrast(200%); transition: filter .35s ease;, a kad se hovera da bude filter:greyscale(0%) contrast(100%) ).

REACT

<suspense fallback={<div>Loading...}>
<neka asynchronous komponenta, poput fetch data>
</suspense>

TYPESCRIPT AND REACT
HANDLING STATE

const [number, setNumber] = useState<number | string>(5);

// zbog exporta ga stavim izvan glavne funkcije
esport interface IState {
people: {
name: string,
age: number,
url: string,
note?: string
}[]
}
const [people, setPeople] = useState<IsState["people"]>([])

HANDLING PROPS
u functional component staviti

import { IState as IProps } from "../App"

const List: ReactFC<Iprops> = ({ people }) => {}

HANDLING FUNCTIONS

kad imam map funkciju za neki data, mogu napraviti funkciju koja će returnati map podatke, a u html dio ju samo pozovem, npr.

<ul>
    {renderList()}
</ul>

a na drugom mjestu napravim renderList funkciju
const renderList = (): JSX.Element[] => {
return people.map((person) => {
return(

<div>person.name</div>
)
})
}

HANDLING EVENTS

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
setInput({
...input, [e.target.name]: e.target.value;
})
}

const handleClick = (): void => {
}

PROPS AND STATE

<AddToList people={people} setPeople={setPeople}>

a onda u Functional komponenti

import { IState as Props } from "../App"

interface IProps{
people: Props["people"]
setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ( { people, setPeople }) => {...}

USEREF
const inputRef = useRef<HTMLInputElement>(null);
<input ref={useRef} />
