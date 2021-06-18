const stringEnglish: string = "about|above|add|after|again|air|all|almost|along|also|always|America|an|and|animal|another|answer|any|are|around|as|ask|at|away|back|be|because|been|before|began|begin|being|below|between|big|book|both|boy|but|by|call|came|can|car|carry|change|children|city|close|come|could|country|cut|day|did|different|do|does|don't|down|each|earth|eat|end|enough|even|every|example|eye|face|family|far|father|feet|few|find|first|follow|food|for|form|found|four|from|get|girl|give|go|good|got|great|group|grow|had|hand|hard|has|have|he|head|hear|help|her|here|high|him|his|home|house|how|idea|if|important|in|Indian|into|is|it|its|it's|just|keep|kind|know|land|large|last|later|learn|leave|left|let|letter|life|light|like|line|list|little|live|long|look|made|make|man|many|may|me|mean|men|might|mile|miss|more|most|mother|mountain|move|much|must|my|name|near|need|never|new|next|night|no|not|now|number|of|off|often|oil|old|on|once|one|only|open|or|other|our|out|over|own|page|paper|part|people|picture|place|plant|play|point|put|question|quick|quickly|quite|read|really|right|river|run|said|same|saw|say|school|sea|second|see|seem|sentence|set|she|should|show|side|small|so|some|something|sometimes|song|soon|sound|spell|start|state|still|stop|story|study|such|take|talk|tell|than|that|the|their|them|then|there|these|they|thing|think|this|those|thought|three|through|time|to|together|too|took|tree|try|turn|two|under|until|up|us|use|very|walk|want|was|watch|water|way|we|well|went|were|what|when|where|which|while|white|who|why|will|with|without|word|work|world|would|write|year|you|young|your"
const English: string[] = stringEnglish.split('|');
const Spanish: string[] = ["que","de","no","a","la","el","es","y","en","lo","un","por","qué","me","una","te","los","se","con","para","mi","está","si","bien","pero","yo","eso","las","sí","su","tu","aquí","del","al","como","le","más","esto","ya","todo","esta","vamos","muy","hay","ahora","algo","estoy","tengo","nos","tú","nada","cuando","ha","este","sé","estás","así","puedo","cómo","quiero","sólo","soy","tiene","gracias","o","él","bueno","fue","ser","hacer","son","todos","era","eres","vez","tienes","creo","ella","he","ese","voy","puede","sabes","hola","sus","porque","dios","quién","nunca","dónde","quieres","casa","favor","esa","dos","tan","señor","tiempo","verdad","estaba","mejor","están","va","hombre","usted","mucho","hace","entonces","siento","tenemos","puedes","ahí","ti","vida","ver","alguien","sr","hasta","sin","mí","solo","años","sobre","decir","uno","siempre","oh","ir","cosas","también","antes","has","ni","mis","día","estar","estamos","noche","nadie","otra","quiere","parece","nosotros","poco","padre","trabajo","gente","mira","vas","sea","les","donde","mismo","hecho","ellos","dijo","pasa","dinero","hijo","tal","otro","hablar","seguro","claro","estas","lugar","mundo","amigo","espera","mierda","han","tus","sabe","después","momento","desde","fuera","cosa","tipo","mañana","podemos","dije","gran","necesito","estado","podría","acuerdo","papá","tener","dice","mío","crees","buena","gusta","nuestro","nuevo","será","haciendo","días","nombre","buen","había","ven","tres","menos","debe","tenía","mal","conmigo","madre","hoy","quien","sido","mamá","tienen","luego","todas","allí","toda","hora","mujer","visto","haces","importa","contigo","ve","tarde","oye","parte","haber","hombres","problema","mas","saber","quería","aún","veces","nuestra","hacerlo","cada","hizo","veo","tanto","razón","ustedes","idea","esos","van","quizá","debo","alguna","cierto","ud","muerto","unos","estos","salir","policía","realmente","demasiado","familia","pueden","cabeza","hemos","amigos","chica","cariño","lado","allá","entre","minutos","digo","algún","serio","cuidado","pasó","buenas","somos","amor","puerta","ves","vaya","ah","suerte","eh","rápido","cuenta","quizás","io","esas","pues","pasado","pensé","todavía","hermano","debes","casi","forma","aqui","chico","ok","dicho","nueva","sabía","muchas","dentro","hice","contra","auto","camino","ayuda","primera","hacia","vi","miedo","adiós","primero","debería","poder"];

class Language {
    private words: string[];
    private languageElement: HTMLSelectElement;
    private localLanguage: number;

    constructor(){
        this.languageElement = document.querySelector('.nav__list-languages');
        this.localLanguage = parseInt(localStorage.getItem('language'));
        this.words = [];
    }

    language(){
        if (localStorage.getItem('language') === null) {
            this.localLanguage = 1;
        }
        switch (this.localLanguage) {
            case 1:
                this.words = English;
                break;
            case 2:
                this.words = Spanish;
                break;
        }

        this.languageElement.addEventListener('input', this.handleInput.bind(this));
        return this.words;
    }
    private handleInput(){
        switch (this.languageElement.selectedIndex) {
            case 1:
                localStorage.setItem('language', `${1}`);
                break;
            case 2:
                // this.words = Spanish;
                localStorage.setItem('language', `${2}`);
                break;
            // if you add another language
        }
        document.location.reload();
    }
}

export default Language;