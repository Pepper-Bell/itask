<<<<<<< Updated upstream
// 내정보 모니터 구현
let monitorLevel = 0;

function increaseMonitorLevel() {
  if (monitorLevel < 1000) {
    monitorLevel += Math.min(3, 1000 - monitorLevel); // 최대 3씩 증가
    document.getElementById("monitor-level").textContent = `${monitorLevel}m`;
  }
}

// 기여도 증가를 매 1초마다 실행
setInterval(increaseMonitorLevel, 1000);

//  내 정보 inch 구현
// 사용자 이름 설정
document.getElementById("user-name").textContent = "홍길동님";

// 모니터 인치 계산
let monitorInches = 0;

function updateMonitorLevel() {
  monitorInches += 100;
  document.getElementById("monitor-levelup").textContent = `${monitorInches / 100} inch`;
}

setInterval(updateMonitorLevel, 1000); // 매 1초마다 증가
=======
// 기여도 m
let monitorLevel = 0;
// 모디터 인치
let monitorInches = 0;

function increaseMonitorLevel() {
  monitorLevel++; //증가
  document.getElementById("monitor-level").textContent =
  `${monitorLevel}m`; // 모니터 값 업뎃

// 100m 시 1inch
  if (monitorLevel >= 100) {
  monitorInches++;
  monitorLevel = 0; //초기화
  document.getElementById("monitor-levelup").textContent =
  `${monitorInches} inch`;
  }
}

document.getElementById("user-name").textContent = "지지베베님";
>>>>>>> Stashed changes
