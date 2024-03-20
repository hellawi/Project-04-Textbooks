import PropTypes from 'prop-types';

function PDFReader({ pdf }) {
  return <iframe src={pdf} width="70%" height="940" allow="autoplay"></iframe>;
}
export default PDFReader;

PDFReader.propTypes = {
  pdf: PropTypes.string.isRequired,
};
