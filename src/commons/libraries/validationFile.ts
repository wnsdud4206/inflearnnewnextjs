// 인자에서 인자의 값이 있는 지 없는 지 확실하지 않을 때 ?를 뒤에 붙여주면 규칙이 어긋나는 부분이 해결된다.
export const checkValidationFile = (file?: File): boolean => {
  if (typeof file === "undefined") {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MG)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
};
