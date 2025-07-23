import { test, expect } from '@playwright/test';

test.describe('Portfolio Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage', async ({ page }) => {
    await expect(page).toHaveTitle(/卜部柊人.*Portfolio/i);
    await expect(page.locator('h1')).toContainText('卜部 柊人');
  });

  test('should have working navigation', async ({ page }) => {
    // Check if navigation links are visible
    await expect(page.locator('nav .nav-menu')).toBeVisible();
    
    // Test navigation links
    const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Contact'];
    
    for (const linkText of navLinks) {
      await expect(page.locator(`button:has-text("${linkText}")`)).toBeVisible();
    }
  });

  test('should navigate to different sections', async ({ page }) => {
    // Click on About link
    await page.click('button:has-text("About")');
    await page.waitForTimeout(1000); // Wait for smooth scroll
    await expect(page.locator('#about')).toBeInViewport();

    // Click on Projects link
    await page.click('button:has-text("Projects")');
    await page.waitForTimeout(1000);
    await expect(page.locator('#projects')).toBeInViewport();

    // Click on Contact link
    await page.click('button:has-text("Contact")');
    await page.waitForTimeout(1000);
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should display hero section content', async ({ page }) => {
    await expect(page.locator('.hero-title')).toContainText('卜部 柊人');
    await expect(page.locator('.hero-subtitle')).toContainText('Frontend Developer');
    await expect(page.locator('.hero-description')).toBeVisible();
    await expect(page.locator('.btn-primary')).toContainText('プロジェクトを見る');
    await expect(page.locator('.btn-secondary')).toContainText('お問い合わせ');
  });

  test('should display about section', async ({ page }) => {
    await page.click('button:has-text("About")');
    await page.waitForTimeout(1000);
    
    await expect(page.locator('#about .section-title')).toContainText('About Me');
    await expect(page.locator('.skills h3')).toContainText('技術スタック');
    
    // Check if skill tags are displayed
    const skillTags = ['React', 'TypeScript', 'Vue.js', 'Node.js'];
    for (const skill of skillTags) {
      await expect(page.locator(`.skill-tag:has-text("${skill}")`)).toBeVisible();
    }
  });

  test('should display experience section', async ({ page }) => {
    await page.click('button:has-text("Experience")');
    await page.waitForTimeout(1000);
    
    await expect(page.locator('#experience .section-title')).toContainText('Experience & Education');
    await expect(page.locator('.timeline-header').first()).toContainText('職歴');
    await expect(page.locator('.timeline-header').last()).toContainText('学歴');
  });

  test('should display projects section', async ({ page }) => {
    await page.click('button:has-text("Projects")');
    await page.waitForTimeout(1000);
    
    await expect(page.locator('#projects .section-title')).toContainText('Projects');
    await expect(page.locator('.project-card')).toHaveCount(5);
    
    // Check if project cards have required elements
    const firstProject = page.locator('.project-card').first();
    await expect(firstProject.locator('h3')).toBeVisible();
    await expect(firstProject.locator('p')).toBeVisible();
    await expect(firstProject.locator('.tech-tag').first()).toBeVisible();
  });

  test('should display contact section', async ({ page }) => {
    await page.click('button:has-text("Contact")');
    await page.waitForTimeout(1000);
    
    await expect(page.locator('#contact .section-title')).toContainText('Contact');
    
    // Check if social links are present
    const socialLinks = ['Email', 'GitHub', 'Twitter', 'LinkedIn'];
    for (const social of socialLinks) {
      await expect(page.locator(`.social-link:has-text("${social}")`)).toBeVisible();
    }
  });

  test('should have working hero buttons', async ({ page }) => {
    // Test "プロジェクトを見る" button
    await page.click('.btn-primary');
    await page.waitForTimeout(1000);
    await expect(page.locator('#projects')).toBeInViewport();

    // Go back to top and test "お問い合わせ" button
    await page.click('button:has-text("Home")');
    await page.waitForTimeout(1000);
    await page.click('.btn-secondary');
    await page.waitForTimeout(1000);
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if navigation is still visible
    await expect(page.locator('nav')).toBeVisible();
    
    // Check if hero section adapts to mobile
    await expect(page.locator('.hero-title')).toBeVisible();
    await expect(page.locator('.profile-image')).toBeVisible();
    
    // Check if sections are still accessible
    await page.click('button:has-text("Projects")');
    await page.waitForTimeout(1000);
    await expect(page.locator('#projects')).toBeInViewport();
  });

  test('should have proper hover effects', async ({ page }) => {
    // Test navigation hover effect
    const navLink = page.locator('button:has-text("About")');
    await navLink.hover();
    
    // Test project card hover effect
    await page.click('button:has-text("Projects")');
    await page.waitForTimeout(1000);
    
    const projectCard = page.locator('.project-card').first();
    await projectCard.hover();
    
    // Test social link hover effect
    await page.click('button:has-text("Contact")');
    await page.waitForTimeout(1000);
    
    const socialLink = page.locator('.social-link').first();
    await socialLink.hover();
  });

  test('should handle keyboard navigation', async ({ page }) => {
    // Test tab navigation through nav links
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Test Enter key on navigation
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
  });
});