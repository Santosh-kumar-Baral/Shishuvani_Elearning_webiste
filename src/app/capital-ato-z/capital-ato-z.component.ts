import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-capital-ato-z',
  templateUrl: './capital-ato-z.component.html',
  styleUrls: ['./capital-ato-z.component.css']
})
export class CapitalAtoZComponent implements OnInit {

  @ViewChild('alphabetContainer', { static: true })
  alphabetContainerRef!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initializeAlphabetLetters();
  }

  initializeAlphabetLetters() {
    const alphabetContainer = this.alphabetContainerRef.nativeElement as HTMLElement;
    const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const animations: string[] = [
      'animate__bounce',
      'animate__flash',
      'animate__pulse',
      'animate__rubberBand',
      'animate__shakeX',
      'animate__swing',
      'animate__tada',
      'animate__wobble'
    ];

    // Function to get a random animation class
    function getRandomAnimation(): string {
      return animations[Math.floor(Math.random() * animations.length)];
    }

    // Loop through each letter from 'A' to 'Z'
    for (let letter of letters) {
      const letterElement = document.createElement('div');
      letterElement.textContent = letter;
      letterElement.classList.add('alphabet-letter');

      // Add random hover animation using Animate.css classes
      letterElement.addEventListener('mouseenter', function () {
        const randomAnimation = getRandomAnimation();
        letterElement.classList.add('animate__animated', randomAnimation);
      });

      letterElement.addEventListener('animationend', function () {
        letterElement.classList.remove('animate__animated');
        letterElement.classList.remove(...animations); // Remove all animation classes
      });

      // Append the letter element to the container
      alphabetContainer.appendChild(letterElement);
    }
  }
}
