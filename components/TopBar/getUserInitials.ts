export default function GetUsernameInitials(firstNane?: String) {
	if (!firstNane) {
		return '';
	}
	return `${firstNane[0].toUpperCase()}`;
}
