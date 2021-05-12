const Pagination = ({ flagsPerPage, totalFlags, paginate }) => {

    const pageNumbers = [];

    const flagsLength = Math.ceil(totalFlags / flagsPerPage);

    for (let i = 1; i <= flagsLength; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav class="d-flex justify-content-center">
            
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>))
                }
            </ul>
        </nav>
    );
};

export default Pagination;