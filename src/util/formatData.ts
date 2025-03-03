export function formatDate(isoString: string): string[] {
  const date = new Date(isoString);
  const now = new Date();

  const year = String(date.getFullYear()).slice(2); // '25'
  const month = String(date.getMonth() + 1).padStart(2, "0"); // '02'
  const day = String(date.getDate()).padStart(2, "0"); // '16'

  // 현재 시간과의 차이를 계산 (밀리초 단위)
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60)); // 분 단위
  const diffInHours = Math.floor(diffInMinutes / 60); // 시간 단위
  const diffInDays = Math.floor(diffInHours / 24); // 일 단위

  let timeAgo = "";
  if (diffInMinutes < 60) {
    timeAgo = `${diffInMinutes}m ago`; // 1시간 미만 → 'Xm ago'
  } else if (diffInHours < 24) {
    timeAgo = `${diffInHours}h ago`; // 24시간 미만 → 'Xh ago'
  } else {
    timeAgo = `${diffInDays}d ago`; // 1일 이상 → 'Xd ago'
  }

  return [`${year}.${month}.${day}`, timeAgo];
}
