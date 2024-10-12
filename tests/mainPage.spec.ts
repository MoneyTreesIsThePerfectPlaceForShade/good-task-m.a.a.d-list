import {test, expect} from '@playwright/test';

test('Добавление задачи в список дел без срока', async ({page}) => {
  const taskText = 'Помой пол в гостинной';
  const descriptionText = 'Возьми швабру и ведро, не забудь добавить средство';
  /**
   * Смотри Locators API.
   */
  const titleInput = page.getByTestId('titleOfTask');
  const descriptionTextarea = page.getByTestId('descriptionOfTask');
  const submitButton = page.getByText('Добавить задачу');
  const titleOfCreatedTask = page.getByTestId(`titleOfTask-${taskText}`);
  const descriptionOfCreatedTask = page.getByTestId(`descriptionOfTask-${descriptionText}`);

  /**
   * Любой тест начинается с перехода на ссылку.
   * В данном случае на главную страницу (В конфиге см. baseUrl). 
   */
  await page.goto('/');

  await titleInput.fill(taskText);
  await expect(titleInput).toHaveValue(taskText);

  await descriptionTextarea.fill(descriptionText);
  await expect(descriptionTextarea).toHaveText(descriptionText);

  await submitButton.click();

  await expect(titleOfCreatedTask).toBeVisible();
  await expect(titleOfCreatedTask).toHaveText(taskText);

  await expect(descriptionOfCreatedTask).toBeVisible();
  await expect(descriptionOfCreatedTask).toHaveText(descriptionText);
});
