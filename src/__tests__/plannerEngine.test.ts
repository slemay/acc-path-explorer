import { describe, it, expect } from 'vitest';
import { generateFirstSemesterSchedules } from '@/lib/plannerEngine';
import { DEFAULT_STUDENT_CONTEXT } from '@/lib/storage';
import { ACC_PROGRAMS } from '@/data/accPrograms';

describe('First-Semester Planner Engine', () => {
  it('should generate Maximum Flexibility schedule containing 42-hour core courses', () => {
    const { maxFlexibilitySchedule } = generateFirstSemesterSchedules(
      DEFAULT_STUDENT_CONTEXT
    );

    expect(maxFlexibilitySchedule.courses.length).toBe(4);
    expect(maxFlexibilitySchedule.totalCreditHours).toBeGreaterThanOrEqual(12);

    // Verify ENGL 1301 is present
    const hasEnglish = maxFlexibilitySchedule.courses.some(c => c.code === 'ENGL 1301');
    expect(hasEnglish).toBe(true);

    // Verify EDUC 1300 is present
    const hasEduc = maxFlexibilitySchedule.courses.some(c => c.code === 'EDUC 1300');
    expect(hasEduc).toBe(true);

    // Verify advisor questions are populated
    expect(maxFlexibilitySchedule.advisorQuestions.length).toBeGreaterThan(0);
    expect(maxFlexibilitySchedule.tsiNotice).toContain('TSI');
  });

  it('should include exploratory first-semester course when leading program is provided', () => {
    const csProgram = ACC_PROGRAMS.find(p => p.id === 'prog-cs-as');
    expect(csProgram).toBeDefined();

    const { exploratorySchedule } = generateFirstSemesterSchedules(
      DEFAULT_STUDENT_CONTEXT,
      csProgram
    );

    expect(exploratorySchedule.courses.length).toBe(4);
    const hasIntroProg = exploratorySchedule.courses.some(c => c.code === 'COSC 1336');
    expect(hasIntroProg).toBe(true);
    expect(exploratorySchedule.advisorQuestions.some(q => q.includes('COSC 1336'))).toBe(true);
  });
});
