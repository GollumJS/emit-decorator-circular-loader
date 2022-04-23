module.exports = function (content) {

	content = content.replace(
		/__metadata\s*\(\s*['"]design:(type|paramtypes|returntype)['"]\s*,\s([^)]+)\)/gmi,
		function(line, target, type) {
			return `__metadata("design:${target}", function() { return ${type} })`;
		}
	);
	return content
};
