

const BuildPage = (index: number) => (
    <>
        <h3>Page {index}</h3>
        <div>
            Page {index} content: { 'asdasdsadsadsadasdasdsad' }
        </div>
    </>
);

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);