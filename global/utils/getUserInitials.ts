export default function getUserInitials(firstNane?: String) {
	if (!firstNane) {
		return '';
	}
	return `${firstNane[0].toUpperCase()}`;
}
