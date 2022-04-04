<?php
class Coffee {
    private $coffeeType; // Untyped since PHP is not strongly typed
    public $origin;

    public function setCoffeType(string coffeeType): void {
        if (strtolower($coffeeType) === 'arabica' || strtolower($coffeeType) === 'robusta') {
            $this->coffeeType = ucfirst($coffeeType);
        }
    }

    public function getCoffeeType(): ?string {
        return $this->coffeeType;
    }
}