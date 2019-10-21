<?php

/**
 *Creating class Something that creates some kind of objects
 *
 * @author Timothy Beck <dev@timothybeck.com>
 */
class Something {
	/**
	 * id for this thing
	 * @var int $somthingId
	 */
	private $somethingId;
	/**
	 * name for this thing
	 * @var string $somthingName
	 */
	private $somethingName;
	/**
	 * getter for somethingId
	 *
	 * @return string value of $somethingId
	 */
	public function getSomethingId() {
		return($this->somethingId);
	}
	/**
	 * getter for somethingName
	 *
	 * @return string value of $somethingName
	 */
	public function getSomethingName() {
		return($this->somethingName);
	}
	/**
	 * setter for somethingId
	 *
	 * @param int $newSomethingId
	 * @throws \InvalidArgumentException if not an integer
	 */
	public function setSomethingId($newSomethingId) {
		//removes white space
		$newSomethingId = trim($newSomethingId);
		//checks if int
		$newSomethingId = filter_var($newSomethingId, FILTER_SANITIZE_NUMBER_INT);
		if($newSomethingId === false) {
			throw(new \InvalidArgumentException('Something Id is not a number.'));
		}
		$this->somethingId = $newSomethingId;
	}

	/**
	 * Setter for somethingName
	 *
	 * @param string $newSomethingName
	 * @throws /InvalidArgumentException if not a string
	 */
	public function setSomethingName($newSomethingName) {
		//removes white space
		$newSomethingName = trim($newSomethingName);
		//checks if string
		$newSomethingName = filter_var($newSomethingName, FILTER_SANITIZE_STRING);
		if(empty($newSomethingName)===true) {
			throw(new \InvalidArgumentException('Something Name is either empty or invalid'));
		}
		$this->somethingName = $newSomethingName;
	}
	public function exposeSomething($somethingName) {
		//exposes something as something else merely disguised as something.
		$this->somethingName = "Something Disguised As $somethingName";
		return($this->somethingName);
	}

	/**
	 * constructor for the something class
	 *
	 * @param int $newSoemthingId
	 * @param string $newSomethingName
	 * @throws \InvalidArgumentException if data types violate type hints
	 */
	public function __construct($newSomethingId, $newSomethingName) {
		try {
			$this->setSomethingId($newSomethingId);
			$this->setSomethingName($newSomethingName);
		}
		catch(\InvalidArgumentException $exception) {
			$exceptionType = get_class($exception);
			throw(new $exceptionType($exception->getMessage(), 0, $exception));
		}
	}

}