export default function DocumentViewer({ children }) {
    
    //Use Effect on load
    
    return (
        <iframe>
            { children }
        </iframe>
    );
}