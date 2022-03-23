import './Grid.css';

function Grid(props) {
    const { children, columns } = props;
    let gridClass = `grid grid-${columns}`;
    return (
        <div className={gridClass}>
            {children}
        </div>
    )
}

export default Grid;